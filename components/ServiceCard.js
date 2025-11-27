export default function ServiceCard({ title, text, icon }) {
  return (
    <div className="card">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <img src={icon} alt={title} style={{width:42,height:42}}/>
        <div>
          <h3 style={{margin:'0 0 6px'}}>{title}</h3>
          <p style={{margin:0,color:'#6b7280',fontSize:14}}>{text}</p>
        </div>
      </div>
    </div>
  )
}
