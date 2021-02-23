import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import Heading from '../heading'
import Link from '../link'
import { SpotifyPlayerWidget } from '@universal-apps/swan-react'
import './index.css'

const isDataValid = (data) => data && data.uri

const SpotifyWidget = ({ uri }) => (
  <div className='today-song-of-day-spotify-widget'>
    <SpotifyPlayerWidget
      itemUri={uri}
    />
  </div>
)

const UnrecognizedSource = ({ data }) => (
  <div className='today-song-of-day-unrecognized'>
    <Text color={'primary'}>
        <Link href={data.uri} isInternal={false}>{data.track_name}</Link> by <Text color={'primary'}>{data.artist_name}</Text> on <Text color={'tertiary'} className='today-song-of-day-source'>{data.source}</Text>
    </Text>
  </div>
)

const Song = ({ data }) => (
	<>
		{isDataValid(data) && (
			<div className='today-song-of-day'>
				<Heading text='Song of the day' />
        <div className='today-song-of-day-content'>
          {data.source.includes('spotify') && data.uri.includes('spotify') 
            ? <SpotifyWidget uri={data.uri} />
            : <UnrecognizedSource data={data} />
          }
        </div>
			</div>
		)}
	</>
)

Song.propTypes = {
	data: PropTypes.shape({
		artist_name: PropTypes.string,
		track_name: PropTypes.string,
    uri: PropTypes.string,
    source: PropTypes.string
	})
}


export default Song
