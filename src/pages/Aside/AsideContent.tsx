import './Aside.css';

function AsideContent(props: any) {
  return (
    <div className="right">
      <h2>Otros contenidos</h2>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
            npm
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.typescriptlang.org/"
          >
            Typescript
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://es.reactjs.org/">
            React
          </a>
        </li>
      </ul>
    </div>
  );
}
export default AsideContent;
