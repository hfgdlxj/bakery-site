import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { SectionTitle } from '../common/SectionTitle'
import { faqItems } from '../../features/contact/data'

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error' | 'not-configured'
  >('idle')
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current) {
      return
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmitStatus('not-configured')
      return
    }

    try {
      setSubmitStatus('submitting')
      await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        formRef.current,
        emailPublicKey,
      )
      formRef.current.reset()
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <section className="contact section scroll-reveal" id="contact">
      <div className="container">
        <SectionTitle title="CONTACT" />

        <div className="contact__grid">
          <article className="contact-card">
            <h4 className="contact-card__title">
              商品及び店舗に関するお問い合わせ
            </h4>

            <div className="contact-card__form-area">
              <button
                type="button"
                className="btn-more contact__toggle-btn"
                onClick={() => setIsFormOpen((prev) => !prev)}
                aria-expanded={isFormOpen}
                aria-controls="contact-form-panel"
              >
                {isFormOpen
                  ? 'お問い合わせフォームを閉じる'
                  : 'お問い合わせフォームを開く'}
              </button>

              {isFormOpen && (
                <form
                  id="contact-form-panel"
                  className="contact-form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div className="contact-form__row">
                    <label htmlFor="contact-name">お名前</label>
                    <input id="contact-name" name="name" type="text" required />
                  </div>

                  <div className="contact-form__row">
                    <label htmlFor="contact-kana">フリガナ</label>
                    <input id="contact-kana" name="kana" type="text" required />
                  </div>

                  <div className="contact-form__row">
                    <label htmlFor="contact-email">E-mail</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact-form__row">
                    <label htmlFor="contact-file">ファイル添付</label>
                    <input id="contact-file" name="attachment" type="file" />
                  </div>

                  <div className="contact-form__row">
                    <label htmlFor="contact-message">お問合せ内容</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-more contact__submit-btn"
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? '送信中...' : '送信する'}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="contact-form__status contact-form__status--success">
                      送信が完了しました。お問い合わせありがとうございます。
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="contact-form__status contact-form__status--error">
                      送信に失敗しました。時間をおいて再度お試しください。
                    </p>
                  )}
                  {submitStatus === 'not-configured' && (
                    <p className="contact-form__status contact-form__status--error">
                      送信設定が未完了です。環境変数を確認してください。
                    </p>
                  )}
                </form>
              )}
            </div>
          </article>

          <article className="contact-card">
            <h4 className="contact-card__title">よくあるご質問</h4>
            <ul className="faq-list">
              {faqItems.map((item) => (
                <li key={item.question} className="faq-item">
                  <details>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
