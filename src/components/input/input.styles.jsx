import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 1.25rem;
  padding: 0.5rem;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.colors.inputFocusColor};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textColor};
  }

  ${({ error, theme }) =>
    error &&
    `
     border: 0.063rem solid ;
     border-color:${theme.colors.errorText};
    `}
`;

export const Error = styled.span`
  align-items: center;
  color: ${(props) => props.theme.colors.errorText};
  display: flex;
  font-size: 0.8rem;
  margin: 0.5rem 0.2rem;
`;

export const IconContainer = styled.span`
  padding: 0.5rem;
  position: absolute;
  right: 1px;
  top: 50%;
  transform: translateY(-50%);
`;
