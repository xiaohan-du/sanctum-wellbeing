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
    <div className={`${styles.grid} -mt-20 z-10 bg-white flex flex-row justify-center items-center`}>
      {
        cardRowData.map(({ url, title, content }, index) => (
          <a
            key={index}
            href={url}
            className={`${styles.card} p-4`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {title} <span>-&gt;</span>
            </h2>
            <p>{content}</p>
          </a>
        ))
      }
    </div>
  )
}
