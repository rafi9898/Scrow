import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledRow,
  StyledTitle,
  StyledSubTitle,
  StyledSelect,
  StyledOption,
  StyledTextarea,
  StyledSummaryContainer,
  StyledLabel,
  StyledPaymentLogo,
  StyledSummaryBox,
  StyledSummaryTitle,
  StyledSummarySubTitle,
  StyledSummaryLabel,
  StyledSummaryDetail,
  StyledSummaryPrice,
  StyledButtonPrimary
} from "./styled/PaymentStyled";
import DotpayLogo from "../../../assets/dotpay-logo.png";
import PaypalLogo from "../../../assets/paypal-logo.png";
import { PaymentControls } from "../../../interfaces/Payment/PaymentControls";

class PaymentBox extends Component<{}, PaymentControls> {
  state = {
    selectedPayment: ""
  };

  setPaymentMethod = (e: any) => {
    const paymentName = e.currentTarget.id;
    this.setState({
      selectedPayment: paymentName
    });
  };

  render() {
    const selectedPaymentStyle = {
      border: "1px solid #48b774",
      transition: "all 0.3s",
      boxShadow: "1px 1px 4px #333"
    };

    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledRow>
            <StyledTitle>Kupujesz produkt</StyledTitle>
            <StyledSubTitle>Gitara Elektryczna [Yamaha]</StyledSubTitle>
            <StyledSelect>
              <StyledOption>Wybierz opcję dostawy</StyledOption>
              <StyledOption>Kurier</StyledOption>
              <StyledOption>Odbiór osobisty</StyledOption>
            </StyledSelect>

            <StyledLabel style={{ marginBottom: "10px" }}>
              Dodatkowe uwagi
            </StyledLabel>
            <StyledTextarea />
            <StyledLabel>Wybierz sposób płatności</StyledLabel>
            <StyledRow>
              <StyledPaymentLogo
                style={
                  this.state.selectedPayment === "dotpay"
                    ? selectedPaymentStyle
                    : null
                }
                id="dotpay"
                onClick={this.setPaymentMethod}
                src={DotpayLogo}
                alt="dotpay logo"
              />
              <StyledPaymentLogo
                style={
                  this.state.selectedPayment === "paypal"
                    ? selectedPaymentStyle
                    : null
                }
                id="paypal"
                onClick={this.setPaymentMethod}
                src={PaypalLogo}
                alt="paypal logo"
              />
            </StyledRow>

            <StyledSummaryBox>
              <StyledSummaryTitle>Podsumowanie</StyledSummaryTitle>

              <StyledSummaryContainer>
                <StyledSummarySubTitle>Szczegóły zakupu:</StyledSummarySubTitle>

                <StyledSummaryLabel>
                  Usługa:{" "}
                  <StyledSummaryDetail>
                    Gitara Elektryczna [Yamaha]
                  </StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Cena: <StyledSummaryDetail>199zł</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Wysyłka:{" "}
                  <StyledSummaryDetail>Odbiór osobisty</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Koszt wysyłki:{" "}
                  <StyledSummaryDetail>7,80zł</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Płatność: <StyledSummaryDetail>Dotpay</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Łącznie: <StyledSummaryPrice>206,80zł</StyledSummaryPrice>
                </StyledSummaryLabel>
              </StyledSummaryContainer>

              <StyledSummaryContainer>
                <StyledSummarySubTitle>Dane do wysyłki:</StyledSummarySubTitle>

                <StyledSummaryLabel>
                  Kraj: <StyledSummaryDetail>Polska</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Województwo:{" "}
                  <StyledSummaryDetail>Dolnośląskie</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Miejscowość:{" "}
                  <StyledSummaryDetail>58-100 Świdnica</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Ulica:{" "}
                  <StyledSummaryDetail>Krakowska 123</StyledSummaryDetail>
                </StyledSummaryLabel>

                <StyledSummaryLabel>
                  Odbiorca:{" "}
                  <StyledSummaryDetail>Rafał Podraza</StyledSummaryDetail>
                </StyledSummaryLabel>
              </StyledSummaryContainer>
            </StyledSummaryBox>
          </StyledRow>
        </StyledContainer>
        <StyledButtonPrimary>Zapłać</StyledButtonPrimary>
      </StyledWrapper>
    );
  }
}

export default PaymentBox;
