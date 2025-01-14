import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { createDisabledTextStyles } from '../common';
import { padding, blockSizes } from '../common/system';

const StyledListItem = styled.li`
  box-sizing: border-box;

  display: block;
  position: relative;
  height: ${props => blockSizes[props.size]};
  width: ${props => (props.square ? blockSizes[props.size] : 'auto')};
  padding: 0 ${padding.sm};

  white-space: nowrap;
  text-align: ${props => (props.square ? 'center' : 'left')};
  line-height: ${props => blockSizes[props.size]};
  color: ${({ theme }) => theme.text};

  &:hover {
    ${({ theme, isDisabled }) =>
      !isDisabled &&
      `
        color: ${theme.textInvert};
        background: ${theme.hoverBackground};
      `}

    cursor: default;
  }
  ${props => props.isDisabled && createDisabledTextStyles()}
`;

const ListItem = ({
  size,
  disabled,
  square,
  className,
  style,
  children,
  onClick,
  ...otherProps
}) => (
  <StyledListItem
    size={size}
    isDisabled={disabled}
    square={square}
    className={className}
    style={style}
    onClick={disabled ? undefined : onClick}
    {...otherProps}
  >
    {children}
  </StyledListItem>
);

ListItem.defaultProps = {
  style: {},
  disabled: false,
  size: 'lg',
  square: false,
  onClick: null,
  className: '',
  children: null
};

ListItem.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  disabled: propTypes.bool,
  square: propTypes.bool,
  children: propTypes.node,
  onClick: propTypes.func
};

export default ListItem;
