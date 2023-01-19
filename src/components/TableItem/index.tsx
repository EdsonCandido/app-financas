import { FormatDate } from '../../helpers/dateFilter';
import { numberForMoney } from '../../helpers/utils';
import { categories } from '../../mocks/categories.mock';
import { Item } from '../../types/Item';
import * as C from './styles'
type Props = {
    item: Item;
    key: number;
}
export const TableItem = ({item, key}: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{FormatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expanse ? 'red' : 'green'}>
                {numberForMoney(item.price)}
                </C.Value>
                </C.TableColumn>
        </C.TableLine>
    );
}