import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props: any) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
     <circle cx="125" cy="122" r="118" /> 
    <rect x="-6" y="257" rx="9" ry="9" width="280" height="25" /> 
    <rect x="1" y="302" rx="7" ry="7" width="280" height="88" /> 
    <rect x="4" y="408" rx="7" ry="7" width="90" height="30" /> 
    <rect x="128" y="405" rx="18" ry="18" width="152" height="40" />
  </ContentLoader>
)

export default Skeleton