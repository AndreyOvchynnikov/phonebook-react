import PropTypes from "prop-types";
import s from './Filter.module.css'

const Filter = ({onChange, filterValue}) => {
    return (
        <label htmlFor="filter" className={s.label}>Find contacts by name:
            <input
                value={filterValue}
                className={s.input}
                onChange={onChange}    
                type="text"
                name="filter"
                autoComplete="off"
                />
            </label>
    )
}

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func,
    filterValue : PropTypes.string
}