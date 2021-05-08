import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {

  rates!: any[];
  loading = true;
  error: any;
  private apollo: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('defaultType');
  }

  ngOnInit(): void {
    if (this.apollo) {
      this.apollo
        .watchQuery({
          query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
        })
        .valueChanges.subscribe((result: any) => {
          this.rates = result?.data?.rates;
          this.loading = result.loading;
          this.error = result.error;
        });
    }

  }

}
