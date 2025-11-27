export default function PricingTable(){
  return (
    <table className="card">
      <thead>
        <tr>
          <th>Plan</th><th>Includes</th><th>Price (Monthly)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Starter</td><td>Basic SEO, 5 keywords, 1 blog</td><td>£299</td></tr>
        <tr><td>Growth</td><td>Technical SEO, 15 keywords, 4 blogs, PPC setup</td><td>£799</td></tr>
        <tr><td>Pro</td><td>Full SEO, Local GEO, Paid Ads management, Content</td><td>£1,499</td></tr>
      </tbody>
    </table>
  )
}
