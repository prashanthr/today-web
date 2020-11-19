import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
const { getHomeFilePath, CONFIG_FILE_NAME } = require('../../util/file')
const Link = require('ink-link')
const CONSTANTS = require('../../constants')
const { author } = require('../../../package.json')
const colors = require('../../util/colors')
import './index.css'

const Attribution = ({ sources, colors }) => (
	<Text className='today-web-text-primary'>
		{sources.map(({ type, name, url }, index) => (
			<Text className='today-web-text-primary' key={index}>
				{type} from <Link url={url}><Text className='text-secondary'>{name}</Text></Link>
				{index !== sources.length - 1 && <>,&nbsp;</>}
			</Text>
		))}
		{'\n'}
		Made with 💙 by <Link url={author.url}>{author.name}</Link>.
	</Text>
)

const ConfigNotice = () => (
	<Text className='text-config'>
		Note: You can view/edit your settings at <Text color={colors.secondary}>{getHomeFilePath(CONFIG_FILE_NAME)}</Text>
	</Text>
)

const Footer = ({ colors }) => (
	<div className='today-web-footer'>
		<ConfigNotice colors={colors} />
		<Attribution sources={CONSTANTS.attribution} colors={colors} />
	</div>
)

module.exports = Footer
