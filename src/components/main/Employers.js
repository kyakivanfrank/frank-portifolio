import React from 'react';

const companies =['company1','company2','company3'];

export default Employer =><div className="container">
<h2>list of Employers</h2>
<div className="emploHolder">{ companies.map(company=><img src={company} alt={company}/>) }</div>
</div>