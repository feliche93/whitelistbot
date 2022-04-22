import { ClipboardListIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function EmptyWhitelist({ title, description, buttonLink, buttonLabel }) {
    return (
        <div className='py-16'>
            <div className='flex items-center justify-center'>
                <Image className='object-contain mx-auto text-center' src='/undraw_collaboration_re_vyau.svg' width={'200%'} height={'200%'} alt="List Icon" />
            </div>
            <div className="text-center">
                <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
                {buttonLink && buttonLabel && (
                <div className="mt-6">
                    <Link href={buttonLink}>
                        <a

                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <ClipboardListIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            {buttonLabel}
                        </a>
                    </Link>
                </div>
                )
            }
            </div>
        </div>
    )
}