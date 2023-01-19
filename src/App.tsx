import { useCallback, useEffect, useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item'
import {Category} from './types/Category'

import {categories} from './mocks/categories.mock';
import {Items} from './mocks/item.mock';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])


  const handlerMonthChange = useCallback((newMonth: string) => {
    setCurrentMonth(newMonth);
  }, [currentMonth]);
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* ÁREA DE INFORMAÇÕES  */}
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handlerMonthChange}
        />

        {/* ÁREA DE ADD  */}

        {/* TABELA DE ITENS */}
        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}

export default App;