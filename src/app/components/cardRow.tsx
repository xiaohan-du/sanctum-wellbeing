import styles from './cardRow.module.scss';

interface ICardRow {
  cardRowData: Array<{
    url: string;
    title: string;
    content: string;
  }>;
}

export const CardRow = ({ cardRowData }: ICardRow) => {
  return (
    <div className={`${styles.cardRow} flex flex-row justify-center items-center rounded-lg font-medium tracking-wide`}>
      {
        cardRowData.map(({ url, title, content }, index) => (
          <a
            key={index}
            href={url}
            className={`${styles.card} px-10 py-4`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {title} <span>-&gt;</span>
            </h2>
            <p className='font-normal'>{content}</p>
          </a>
        ))
      }
    </div>
  )
}
