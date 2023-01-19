import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 5px;
    margin-top: 10px;
`;

export const TableHeaderColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}`: 'auto'};
    padding: 10px 0;
    text-align: left;
`;