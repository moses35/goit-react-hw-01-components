import PropTypes from 'prop-types';

import {
  Section,
  List,
  Element,
  Title,
  Text,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, info }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {info.map(({ id, label, percentage }, idx) => (
          <Element key={id} index={idx}>
            <Text>{label}</Text>
            <Text>{percentage}</Text>
          </Element>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
