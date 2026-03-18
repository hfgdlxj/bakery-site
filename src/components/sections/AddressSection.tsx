import { SectionTitle } from '../common/SectionTitle'

const weekLabels = ['月', '火', '水', '木', '金', '土', '日']
const closedWeekdays = new Set([2, 3])

function getCalendarCells(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const firstWeekdayIndex = (firstDay.getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: Array<number | null> = []

  for (let i = 0; i < firstWeekdayIndex; i += 1) {
    cells.push(null)
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day)
  }
  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

export function AddressSection() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const calendarCells = getCalendarCells(year, month)

  const isOpenDay = (day: number) => {
    const weekday = new Date(year, month, day).getDay()
    return !closedWeekdays.has(weekday)
  }

  return (
    <section className="address section scroll-reveal" id="address">
      <div className="container">
        <SectionTitle title="ADDRESS" />
        <div className="address__content">
          <div className="address__calendar">
            <h4 className="address__calendar-title">{month + 1}月営業日カレンダー</h4>

            <div className="address__week-grid">
              {weekLabels.map((label) => (
                <div key={label} className="address__week-cell">
                  {label}
                </div>
              ))}
            </div>

            <div className="address__date-grid" role="grid" aria-label={`${year}年${month + 1}月営業日`}>
              {calendarCells.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="address__date-cell is-empty" />
                }

                const isOpen = isOpenDay(day)
                return (
                  <div
                    key={day}
                    className={`address__date-cell${isOpen ? ' is-open' : ''}`}
                    role="gridcell"
                    aria-label={`${month + 1}月${day}日 ${isOpen ? '営業日' : '定休日'}`}
                  >
                    {day}
                  </div>
                )
              })}
            </div>

            <div className="address__legend">
              <span className="address__legend-item">
                <span className="address__legend-chip is-open" />
                営業日
              </span>
              <span className="address__legend-item">
                <span className="address__legend-chip is-closed" />
                定休日（火・水）
              </span>
            </div>
          </div>

          <div className="address__map-wrap">
            <div className="address__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6484.31633552344!2d139.69490094810175!3d35.6484745542462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4f6383b351%3A0x72e7ab090ac2da6b!2z44CSMTUwLTAwMzMgVG9reW8sIFNoaWJ1eWEsIFNhcnVnYWt1Y2jFjSwgMjniiJLvvJHvvJggQiBCdWlsZGluZywg44OS44Or44K144Kk44OJ44OG44Op44K5!5e0!3m2!1szh-CN!2sjp!4v1769151188794!5m2!1szh-CN!2sjp"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HAL Boulangerie map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
