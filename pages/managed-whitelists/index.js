import React from 'react'
import EmptyWhitelist from '../../components/whitelist/EmptyWhitelist'
import ManagedWhitelits from '../../components/whitelist/ManagedWhitelists'

export default function Whitelist() {
  return (
    <>
      <EmptyWhitelist
        title={'No whitelists found'}
        description={'Get started by creating a new whitelist.'}
        buttonLink={'/managed-whitelists/new'}
        buttonLabel={'Create a new Whitelist'}
      />
      <ManagedWhitelits />
    </>
  )
}
