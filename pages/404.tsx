import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


function NotFound(props) {
    const router = useRouter()
    useEffect(() => {
        console.log(router)
        setTimeout(() => {
            router.push('/')
        }, 1000)

    }, [])

    return (
        <div>
            Không tìm thấy gì
            <Link href={'/'} passHref>
                <a>Go back home</a>
            </Link>
        </div>
    );
}

export default NotFound;