export default function CaseStudyCard({ title, summary, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} style={{width:'100%',height:140,objectFit:'cover',borderRadius:8,marginBottom:10}}/>
      <h4 style={{margin:'0 0 6px'}}>{title}</h4>
      <p style={{margin:0,color:'#6b7280',fontSize:14}}>{summary}</p>
    </div>
  )
}
