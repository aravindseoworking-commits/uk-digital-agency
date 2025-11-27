export default function Testimonial({ quote, author, role }) {
  return (
    <div className="card">
      <p style={{margin:'0 0 10px',color:'#111'}}>"{quote}"</p>
      <small style={{color:'#6b7280'}}>- {author}, {role}</small>
    </div>
  )
}
