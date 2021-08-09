import { Input, Label } from './Filter.styled'
import { FaSearch } from 'react-icons/fa'

import { connect, useSelector, useDispatch } from 'react-redux'
import action from '../../redux/action'
import { getFilter } from '../../redux/selector'

export default function Filter() {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  const changeFilter = (event) =>
    dispatch(action.changeFilter(event.target.value))

  return (
    <Label>
      <FaSearch /> Find contacts by name
      <Input name="filter" onChange={changeFilter} value={value}></Input>
    </Label>
  )
}

// const mapStateToProps = (state) => ({
//   value: state.filter,
// })

// const mapDispathToProps = (dispatch) => ({
//   onChange: (event) => dispatch(action.changeFilter(event.target.value)),
// })
// export default connect(mapStateToProps, mapDispathToProps)(Filter)
