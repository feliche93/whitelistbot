import React from 'react'
import { useState, useEffect, Fragment } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';


function SearchCommandPallete({ daos }) {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredDaos, setFilteredDaos] = useState([]);

  useEffect(() => {

    function onKeyDown(event) {
      if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen]);

  const doDaoFilter = debounce(query => {
    if (!query) {
      setQuery('');
      return setFilteredDaos([])
    }

    setQuery(query);
    console.log('====>', query)

    setFilteredDaos(daos.filter((dao) => dao.name.toLowerCase().includes(query.toLowerCase())))

  }, 400)

  return (

    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            className="fixed inset-0 bg-gray-500/75"
          />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className='max-w-xl max-h-96 overflow-y-auto mx-auto rounded-xl shadow-2xl ring-1 ring-black/5 bg-white relative divide-y divide-gray-200 overflow-hidden'
            onChange={(dao) => {
              router.push(`/daos/${dao.slug}/twitter`)
              setIsOpen(false)
            }}
          >
            <div className='flex items-center px-4'>
              <SearchIcon className='h-6 w-6 text-gray-500' />
              <Combobox.Input
                onChange={(event) => {
                  doDaoFilter(event.target.value)
                }}
                className='w-full bg-transparent border-0 focus:ring-0 text-sm text-gray-800 placeholder-gray-400 h-12'
                placeholder='Search for a DAO ...'
              />
            </div>
            {filteredDaos.length > 0 && (
              <Combobox.Options static>
                {filteredDaos.map(dao => (
                  <Combobox.Option
                    value={dao}
                    key={dao.objectId}
                    className="text-base"
                  >
                    {({ active }) => (
                      <div className={`flex items-center space-x-2 px-4 py-2 ${active ? 'bg-blue-600' : 'bg-white'}`}>
                        <Image className='object-contain rounded-full' priority={true} src={dao.avatarUrl ? dao.avatarUrl : '/DAO.png'} width={25} height={25} alt={dao.name} />
                        <span className={`font-medium text-gray-900 ${active ? 'text-white' : 'text-gray-900'}`}>{dao.name}</span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {
              query && filteredDaos.length === 0 && (
                <p className='p-4 text-gray-500 text-sm'>No results found.</p>
              )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default SearchCommandPallete;