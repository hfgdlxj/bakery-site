type SectionTitleProps = {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title-wrapper">
      <h3 className="section-title">{title}</h3>
    </div>
  )
}
