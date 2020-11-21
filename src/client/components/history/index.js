import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Heading from '../heading'
import LinkItem from '../link-item'
import { toHumanReadableDate } from '../../util/datetime'
import { capitalizeText } from '../../util/text'

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

const History = ({ data }) => {
	return (
		<>
			{data && (
				<>
					<LinkItem title={<Heading text={'On this day'} />} url={data.url} />
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

export default History
