import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Heading from '../heading'
import LinkItem from '../link-item'
import { FormControls } from '@universal-apps/swan-react'

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

const History = ({ data, limit, onLimitChange }) => {
	return (
		<>
			{data && (
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
							onBlur={e => onLimitChange({ key: 'historyLimit', value: e.target.value })}
						/>
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
