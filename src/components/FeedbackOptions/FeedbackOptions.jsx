import PropTypes from "prop-types"
import { List, Button, } from "./FeedbackOptions.styled"

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <List>
      {options.map(item => {        
        return (
          <li key={item}>
            <Button type="button"
              onClick = {() => onLeaveFeedback(item.toLowerCase())}>
              {item}
            </Button>
          </li>
        )
      })}
    </List>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,    
  };
