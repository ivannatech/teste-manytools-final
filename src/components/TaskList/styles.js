import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 5px 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #69a1ff;
  border-radius: 10px;
  padding: 5px 15px;
`;

export const Text = styled.Text`
  margin-left: 10px;
  flex: 1;
  padding: 5px;
`;

export const DeleteItem = styled.TouchableOpacity`
  margin-right: 5px;
`;
