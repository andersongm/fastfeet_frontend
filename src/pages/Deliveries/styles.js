import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Pagination = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 48px;
    padding: 2px;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
    background: #7d3fe7;
  }
`;


export const TableList = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  /* border-collapse: collapse;  */
  padding: 30px 30px;
  font-size: 16px;
  color: #666;


  thead {
    text-align: left;

    tr {
        display: flex;

        th {
            width: 35%;

            &:first-child {
              width: 10%
            }

            &:nth-child(6){
              width: 40%;
            }

            &:last-child {
              width: 15%;
              text-align: center;
            }

        }

    }
  }

  tbody {

    tr:hover.delivery {
      background: ${darken(0.2, '#fff')};
    }

    tr {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #eee;


        td {
            width: 35%;

            &:first-child {
              width: 10%
            }

            &:nth-child(6){
              width: 40%;
            }

            &:last-child {
              width: 15%;
              text-align: center;
            }

        }

    }

  }

  `;
