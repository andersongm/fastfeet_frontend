import React, { useEffect, useState } from 'react';
import { Container, TableList } from './styles';
import { MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';
import Pagination from '~/components/Pagination';

export default function Problems({ location }) {

  const [problems, setProblems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurentPage] = useState(1);
  const item = location.state?.item;

  async function loadProblems(page = 1) {
    const response = await api.get('/deliveries/problems', {
      params: {
        page
      }
    });
    const { count, rows } = response.data;
    setProblems(rows);
    setCurentPage(page);
    setTotalRecords(count);
  }

  useEffect(() => {
    loadProblems();
  }, [item])

  useEffect(() => {
    if (item) {
      setVisible(false);
    }
  }, [item])

  function handleMenu(id) {
    setCurrentRow(id);
    setVisible(!visible);
  }

  return (
    <Container>
      <HeaderPage title="Problemas na Entrega" />
      <TableList>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Açoes</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={problem.id} >
              <td>#{String(problem.delivery_id).padStart(2, "0")}</td>
              <td>{problem.description}</td>
              <td>{index === currentRow ? (<DropDownMenu visible={visible} entity="problems" item={problem} />) : ''}<MdMoreHoriz size={20} color="#666" onClick={() => handleMenu(index)} /></td>
            </tr>
          ))}
        </tbody>
      </TableList>
      <Pagination
        currentPage={currentPage}
        totalRecords={totalRecords}
        handleChangePage={loadProblems}
      />
    </Container>
  )
}
