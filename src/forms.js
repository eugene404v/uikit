import './forms.scss'
import './blocks/rate/_rate'
import {likeCounter} from './blocks/like/_like'
import {expand} from './utils/expand'
import range from './blocks/range/_range'

likeCounter('like1')
likeCounter('like2')
likeCounter('like3')

expand('trigger1', 'dropdown__input--closed')
expand('trigger2', 'dropdown__input--closed')
expand('trigger3', 'dropdown__input--closed')
expand('trigger4', 'expandable__header--closed')

range('range-slider', 'range-input1', 'range-input2')