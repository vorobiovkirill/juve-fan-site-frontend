type PaginationProps = {
  currentPage: number
  pageCount: number
  onPageChange(page: number): void
  onPageBack(): void
  onPageNext(): void
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageCount,
  onPageChange,
  onPageBack,
  onPageNext,
}) => {
  if (pageCount === 1) return null

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <div className='flex justify-center'>
      <nav aria-label='Page navigation example'>
        <ul className='inline-flex -space-x-px'>
          <li>
            <a
              onClick={onPageBack}
              className='px-3 py-2 ml-0 leading-tight text-customGray bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Назад
            </a>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <a
                aria-current={currentPage === page ? 'true' : 'false'}
                onClick={() => onPageChange(page)}
                className='px-3 py-2 leading-tight text-customGray bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={onPageNext}
              className='px-3 py-2 leading-tight text-customGray bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Вперед
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
