import RowProps from './RowProps';

const Row = ({ children }: RowProps) => (
  <div className="row">
    <div className="col-md-1 col-lg-2" />
    <div className="col-12 col-md-10 col-lg-8">
      {children}
    </div>
    <div className="col-md-1 col-lg-2" />
  </div>
);

export default Row;
