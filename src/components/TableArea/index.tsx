import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ({list}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeaderColumn width={100} >Data</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={130}>Categoria</C.TableHeaderColumn>
                    <C.TableHeaderColumn>Título</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={150} >Valor (R$)</C.TableHeaderColumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) => (
                      <TableItem key={index} item={i} />
                    ))
                }
            </tbody>
        </C.Table>
    );
}