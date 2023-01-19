import * as C from './styles';
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill } from 'react-icons/bs'
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { useCallback } from 'react';

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) =>  void
}

export const InfoArea = ({currentMonth, onMonthChange}: Props) => {

    const handlerPrevMonth = () => {
        let [year, month] = currentMonth.split('-');

        let currentDate = new Date(parseInt(year), (parseInt(month) - 1), 1);

        currentDate.setMonth(currentDate.getMonth() - 1)

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handlerNextMonth = () => {
        let [year, month] = currentMonth.split('-')

        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

        currentDate.setMonth(currentDate.getMonth() + 1)

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
        
    }
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlerPrevMonth}><BsFillArrowLeftSquareFill/> </C.MonthArrow>
                <C.MonthTitle> {formatCurrentMonth(currentMonth)} </C.MonthTitle>
                <C.MonthArrow onClick={handlerNextMonth}><BsFillArrowRightSquareFill/> </C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>
    );
}