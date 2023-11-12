// Write your code here.
import './index.css'

const EachCard = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`list-style ${className}`}>
      <div>
        <h1 className="heading-style">{headerText}</h1>
        <p className="paragraph-style">{description}</p>
        <button type="button" className="button-style">
          Show More
        </button>
      </div>
    </li>
  )
}

export default EachCard
