import PropTypes from "prop-types"
import { List, Item, Button, } from "./FeedbackOptions.styled"

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <List>
      {options.map(item => {        
        return (
          <Item key={item}>
            <Button type="button">
              onClick = {() => onLeaveFeedback(item)}
              {item}
            </Button>
          </Item>
        )
      })}
    </List>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,    
  };
