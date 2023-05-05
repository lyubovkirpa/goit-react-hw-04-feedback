import PropTypes from "prop-types";
import {List, Item} from "./Statistics.styled"

export default function Statistics({ good, neutral, bad }) {
  const uiElements = ['Good', 'Neutral', 'Bad', ];
  const values = [good, neutral, bad];

  return (
    <List>
      {uiElements.map((item, index) => (
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
 
};
