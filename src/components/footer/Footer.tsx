import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

  return (
    <div className='flex justify-center bg-indigo-900 text-white'>
        <div className='container flex flex-col items-center py-4'>
            <p className='text-xl font-bold'>
                © {data} | Copyright: Blog Pessoal - memaria
            </p>

            <p className='text-lg'>
                Acesse minhas redes sociais:
            </p>

            <div className='flex gap-2'>
                <a href='https://linkedin.com/in/memaria' target="_blank" rel="noopener noreferrer">
                    <LinkedinLogoIcon size={32} weight="bold" />
                </a>
                <a href='https://github.com/memaria' target="_blank" rel="noopener noreferrer">
                    <GithubLogoIcon size={32} weight="bold" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer