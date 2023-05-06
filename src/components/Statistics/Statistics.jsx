import PropTypes from "prop-types";
import {List, Item} from "./Statistics.styled"

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const elements = ['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback' ];
  const values = [good, neutral, bad, total, positivePercentage];

  return (
    <List>
      {elements.map((item, index) => (
        <Item key={item}>
          <p>
            {item}: {index !== 4 ? values[index] : values[index] + '%'}
          </p>
        </Item>
      ))}
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
 
};
