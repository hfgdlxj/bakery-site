import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="page">
      <section className="container">
        <h1>ページが見つかりません</h1>
        <p>指定されたURLは存在しないか、移動されました。</p>
        <Link to="/">トップページへ戻る</Link>
      </section>
    </main>
  )
}
