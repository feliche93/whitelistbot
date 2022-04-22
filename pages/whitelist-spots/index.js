import React from 'react'
import EmptyWhitelist from '../../components/whitelist/EmptyWhitelist'

export default function Whitelist() {
  return (
    <EmptyWhitelist
      title={'No whitelists found'}
      description={'You are not on any whitelist yet.'}
    />
  )
}
