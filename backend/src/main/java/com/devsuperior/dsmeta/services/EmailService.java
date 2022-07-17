package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class EmailService {

	@Autowired
	private SaleRepository saleRepository;

	public void sendEmail(Long saleId) {

		Sale sale = this.saleRepository.findById(saleId).get();

		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

		String msg = "Vendedor " + sale.getSellerName() + "foi destaque em " + date
				+ " com um total de R$ " + String.format("%.2f", sale.getAmount());
	}
}
