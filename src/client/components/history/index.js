import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Heading from '../heading'
import LinkItem from '../link-item'
import { FormControls } from '@universal-apps/swan-react'
import { getValueInRange } from '../../util/range'

const HistoryItems = ({ items, title }) => {
	return (
		<>
			<Text inverse color={'tertiary'}>
				{title}
			</Text>
			{items.map((item, idx) => (
				<LinkItem
					key={idx}
					title={`${item.year} - ${item.text}`}
					url={`${item.links && item.links[0] ? item.links[0].link : ''}`}
				/>
			))}
		</>
	)
}

HistoryItems.propTypes = {
	items: PropTypes.array,
	title: PropTypes.string
}

const isDataValid = (data) => data && (data.date !== null && data.url !== null)

const History = ({ data, limit, minLimit, maxLimit, onLimitChange }) => {
	return (
		<>
			{isDataValid(data) && (
				<>
					<div>
						<LinkItem 
							title={(
								<Heading 
									text={'On this day'} />
							)} 
							url={data.url} 
						/>
						&nbsp;&nbsp;
						<FormControls.NumericInput
							formClassName='today-web-heading-limit-form'
							className='today-web-heading-limit-input'
							id='history-limit' 
							name='history-limit' 
							min='1' 
							max='100'
							defaultValue={limit}
							onKeyDown={e => {
								if (e.keyCode === 13) {
									e.preventDefault()
								}
							}}
							onChange={e => onLimitChange({ 
								key: 'historyLimit', 
								value: getValueInRange({
									min: minLimit,
									max: maxLimit,
									value: e.target.value
								}) 
							})}
						/>
						<span className='hint-tip'>
							&nbsp;Update to see changes&nbsp;
						</span>
					</div>
					<HistoryItems items={data.data.Events} title={'Events'} />
					<br />
					<HistoryItems items={data.data.Births} title={'Births'} />
					<br />
					<HistoryItems items={data.data.Deaths} title={'Deaths'} />
				</>
			)}
		</>
	)
}

History.propTypes = {
	data: PropTypes.object
}

export default History
