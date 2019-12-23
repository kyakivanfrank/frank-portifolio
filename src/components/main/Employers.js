import React from 'react';

import premierDistilleries from '../../img/companyLogos/premier distilleries.png';
import cyberSchool from '../../img/companyLogos/cyber school uganda.png';
import caddCentre from '../../img/companyLogos/cadd centre uganda.png';
import livewire from '../../img/companyLogos/livewire uganda.png';

const companies =[premierDistilleries,cyberSchool,caddCentre,livewire];
export default Employer =><div className="container">
<h2>Testimonial companies</h2>
<div className="emploHolder">{ companies.map(company=><img id="company" src={company} alt={company}/>) }</div>
</div>