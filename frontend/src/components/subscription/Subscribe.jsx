import React from "react";
import "./Subscribe.css";


function Subscribe() {
      return(
            <section>
                  <div className="pricing pricing-palden">
                  <div class="pricing-item">
                        <div class="pricing-deco">
                              <div class="pricing-price"><span class="pricing-currency">&#8377;</span> 29
                              <span class="pricing-period">/ mo</span>
                              </div>
                              <h3 class="pricing-title">Way to BLOOM</h3>
                        </div>
                        <ul class="pricing-feature-list">
                        <li class="pricing-feature">Unlocks Bloom</li>
                        <li class="pricing-feature">High quality content</li>
                        <li class="pricing-feature">Unlimited storage</li>
                        </ul>
                        <button class="pricing-action">Subscribe</button>
                  </div>
                  </div>
            </section>
      );
}

export default Subscribe;