/// <reference types="cypress" />

context('Funcinalidade Login', () =>{

	it('Deve fazer login com sucesso', () =>{

	    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
	    cy.get('#username').type('aluno_ebac@teste.com')
	    cy.get('#password').type('aluno_ebac@teste.com')
	    cy.get('.woocommerce-form > .button').click()

	    cy.get('.page-title').should('contain', 'Minha conta')
	    cy.get('.woocommerce-MyAccount-content> :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? sair)') 

	})	

	it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{

	    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
	    cy.get('#username').type('ebac@teste.com')
	    cy.get('#password').type('teste@teste')
	    cy.get('.woocommerce-form > .button').click()
	    
	    cy.get('.woocommerce-error').shold('contain', 'Endereço de e-mail desconhecido.')

		
	})

	it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{

	    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
	    cy.get('#username').type('aluno_ebac@teste.com')
	    cy.get('#password').type('aluno_ebac@teste.com')
	    cy.get('.woocommerce-form > .button').click()

	    
	    cy.get('.woocommerce-error').shold('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  })
})