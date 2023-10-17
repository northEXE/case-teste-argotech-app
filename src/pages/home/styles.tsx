import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #162129;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 400;
`;

export const Subtitle = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
`;

export const CardContainer = styled.View`
    flex: 6;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-content: space-around;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #355A6A;
    border-radius: 12px;
    height: 48px;
    width: 48px;
    margin-left: 8px;
`;