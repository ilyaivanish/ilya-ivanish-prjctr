'use strict';

const CLIENT_ID = '7ca625fd40f0954c4532';
const CLIENT_SECRET = '90e29b701ce20a27ead1a89f0f6a8f5505255c26';

class UI {
    constructor(searchUserInputElement, formElement, profileElement, alertsElement, loadingElement) {
        this.searchUserInputElement = searchUserInputElement;
        this.formElement = formElement;
        this.profileElement = profileElement;
        this.alertsElement = alertsElement;
        this.loadingElement = loadingElement;
        this.searchUserInput = '';

        this.hideLoading();
    }

    onInputChange(callback) {
        let timeoutSearch = null;
        this.searchUserInputElement.addEventListener('keyup', (event) => {
            this.searchUserInput = event.target.value.trim();
            clearTimeout(timeoutSearch);
            timeoutSearch = setTimeout(() => {
                if (callback) {
                    callback(this.searchUserInput);
                }
            }, 1000)
        });
    }

    onFormSubmit(callback) {
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            callback(this.searchUserInput);
        });
    }

    removeUserData() {
        this.profileElement.innerHTML = '';
    }

    renderUserData(user) {
        this.profileElement.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div class="repos"></div>
    `;
    }

    renderError(error) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger';
        alert.innerHTML = `<h4 class="alert-heading">${error.name}</h4><p>${error.message}</p>`;
        this.alertsElement.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }

    showLoading() {
        this.loadingElement.style.display = 'block';
    }

    hideLoading() {
        this.loadingElement.style.display = 'none';
    }
}

class API {
    async getUserData(input) {
        if (!input) {
            throw new Error('Please enter a username');
        }
        const response = await fetch(`https://api.github.com/users/${input}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
        const data = await response.json();
        if (data.message === 'Not Found') {
            throw new Error(`User "${input}" not found`);
        }
        return data;
    }
}

const ui = new UI(
    document.querySelector('.searchUser'),
    document.getElementById('form'),
    document.getElementById('profile'),
    document.getElementById('alerts'),
    document.getElementById('loading'),
);
const api = new API();

const run = () => {
    console.log('start');

    const searchUser = async (input) => {
        try {
            ui.removeUserData();
            ui.showLoading();
            const userData = await api.getUserData(input);
            console.log('userData', userData);
            ui.renderUserData(userData);
        } catch (error) {
            console.log('error', error);
            ui.renderError(error);
        } finally {
            ui.hideLoading();
        }
    };

    ui.onInputChange(searchUser);
    ui.onFormSubmit(searchUser);
};

run();