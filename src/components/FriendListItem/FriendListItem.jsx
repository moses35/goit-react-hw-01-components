import PropTypes from 'prop-types';

import {
  Element,
  Online,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, online }) => {
  return (
    <Element>
      <Online status={online}></Online>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Element>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
